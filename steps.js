const steps =[    
    { form: 
       `<h3>Register</h3>
       <div class="content">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="enter your name">
          <p class="no-err-msg" id="name-error">Please enter your full name</p>
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="example@gmail.com">
          <p class="no-err-msg" id="email-error">Please enter a valid email address </p>
       </div>
       <button type="submit">Continue</button>`},
    { form: 
        `<h3>which topics are you interested in?</h3>
        <div class="content">
           <div class="topic" id="t1" onclick="select(this.id)">Software Development</div>
           <div class="topic" id="t2" onclick="select(this.id)">User Experience</div>
           <div class="topic" id="t3" onclick="select(this.id)">Graphic Design</div>
           <p class="no-err-msg" id="topic-error">Please select a topic.</p>
        </div>
       <button type="submit">Continue</button>`},
     { form: 
        `<h3>Summary</h3>
         <div class="content">
         <div class="info1">
             <span class="label">Name:</span><span class="userName"></span><br>
             <span class="label">Email:</span><span class="userEmail"></span>
         </div>
         <div class="info2">
             <span class="label">Topics:</span>
             <ul>
             </ul>
         </div>
         </div>
         <button type="submit">Confirm</button>`}
];
export default steps;
