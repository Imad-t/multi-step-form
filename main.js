import steps from './steps.js';

let step = 0;
let userInfo = {
    name: '',
    email: '',
    topic: []
};

const next = () =>{
    step++;
    if (step === steps.length) {
        //display success alert
        alert('✅ Success');
    
        //wait 0.5 seconds and then refresh the page
        setTimeout(function () {
            location.reload();
        }, 500);
    }
    else{
        
        
        if (step === 1){
            //validation
            // Validate Name
            if (document.getElementById('name').value.trim() === '' ||  document.getElementById('name').value.length < 6) {
                document.getElementById('name-error').className='err-msg';
                step--;
                return;
            }else{
                document.getElementById('name-error').className='no-err-msg';
            }
            
            // Validate Email
            if (document.getElementById('email').value.trim() === '' || document.getElementById('email').value.length < 10) {
                document.getElementById('email-error').className='err-msg';
                step--;
                return;
            }else{
                document.getElementById('email-error').className='no-err-msg';
            }
            //save user info
            userInfo.name = document.getElementById('name').value;
            userInfo.email = document.getElementById('email').value;
            console.log(userInfo);

            //update progress dots
            document.getElementById('d1').className = 'prevdot';
            document.getElementById('in1').className = 'previndot';
            document.getElementById('d2').className = 'selecteddot';
            document.getElementById('in2').className = 'selectedindot';

            //update form
             document.querySelector('form').innerHTML = steps[step].form;
        }
        else if (step === 2){
            //save user info
            for (let i = 1; i <= 3; i++){
                if (document.getElementById('t'+i).classList.contains('selectedTopic')){
                    userInfo.topic.push(document.getElementById('t'+i).innerHTML);
                }
            }
            if(userInfo.topic.length === 0){
                document.getElementById('topic-error').className ='err-msg';
                step--;
                return;
            }else{
                document.getElementById('topic-error').className='no-err-msg';
            }
            console.log(userInfo);
            //update progress dots
            document.getElementById('d2').className = 'prevdot';
            document.getElementById('in2').className = 'previndot';
            document.getElementById('d3').className = 'selecteddot';
            document.getElementById('in3').className = 'selectedindot';

            //update form
            document.querySelector('form').innerHTML = steps[step].form;
            document.querySelector('.userName').textContent = userInfo.name;
            document.querySelector('.userEmail').textContent = userInfo.email;

            const ul = document.querySelector('ul');
            userInfo.topic.forEach(topic => {
                const li = document.createElement('li');
                li.textContent = topic;
                ul.appendChild(li);
            });
        }

    }
    return step;
}

const select = (id) => {
    // get the element by ID
    const element = document.getElementById(id);

    // toggle between 'topic' and 'selectedTopic' classes
    element.classList.toggle('topic');
    element.classList.toggle('selectedTopic');
}


window.next = next;
window.select = select;
