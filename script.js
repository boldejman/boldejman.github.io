/*
    Nail Sultanbekov Terminal CV
    Interactive Terminal Logic
*/


const input = document.getElementById("command-input");
const output = document.getElementById("terminal-output");



/*
    Terminal commands
*/

const commands = {


    help: `
Available commands:

    whoami       - display profile
    about        - learn about me
    education    - academic background
    skills       - technical interests
    github       - open GitHub profile
    linkedin     - open LinkedIn profile
    email        - send an email
    clear        - clear terminal

`,


    whoami: `
Nail Sultanbekov

Artificial Intelligence Student
Charles University

Focus:
Deep Learning
Neural Networks
Computer Vision
Transformers

`,


    about: `
I am a student at Charles University studying
Artificial Intelligence.

My main interests are Deep Neural Networks,
especially:

- Convolutional Neural Networks (CNNs)
- Transformers
- Representation Learning
- Machine Learning

I enjoy exploring how modern AI systems
learn, reason, and solve complex problems.

`,


    education: `
🎓 Charles University

Field:
Artificial Intelligence

Current focus:
Deep Learning and Neural Networks

`,


    skills: `
Technical interests:

[ Machine Learning ]
    Python
    PyTorch
    Neural Networks

[ Deep Learning ]
    CNNs
    Transformers
    Computer Vision
    Representation Learning

[ Other ]
    Algorithms
    Mathematics
    Software Development

`,


    github: `
Opening GitHub profile...

https://github.com/boldejman
`,


    linkedin: `
Opening LinkedIn profile...

https://www.linkedin.com/in/nail-sultanbekov-422417240/
`,


    email: `
Email:

nail040313@gmail.com
`


};



/*
    Add output to terminal
*/

function print(text) {

    const block = document.createElement("div");

    block.className = "output-block";

    block.innerHTML =
        text
        .replace(
            /(https?:\/\/[^\s]+)/g,
            '<a href="$1" target="_blank">$1</a>'
        )
        .replace(/\n/g, "<br>");

    output.appendChild(block);

}



/*
    Command execution
*/

function execute(command){

    command = command
        .trim()
        .toLowerCase();


    if(command === "") {
        return;
    }



    // show command

    print(
        `<span class="output-title">
        visitor@nail:~$</span> ${command}`
    );



    if(command === "clear") {

        output.innerHTML = "";

        return;

    }



    if(commands[command]) {

        print(commands[command]);

    }

    else {

        print(`
Command not found:

${command}

Type "help" to see available commands.
`);

    }


}



/*
    Keyboard handling
*/


input.addEventListener(
    "keydown",
    function(event){


        if(event.key === "Enter"){


            execute(input.value);


            input.value = "";


            window.scrollTo(
                0,
                document.body.scrollHeight
            );


        }

    }
);



/*
    Boot typing animation
*/

function typeBoot(){

    const boot =
        document.getElementById("boot");


    const lines =
        boot.querySelectorAll("p");


    lines.forEach(
        (line,index)=>{

            line.style.opacity="0";


            setTimeout(
                ()=>{

                    line.style.transition =
                    "opacity 0.5s";


                    line.style.opacity="1";


                },
                index * 350
            );


        }
    );

}


typeBoot();



/*
    Initial focus
*/

window.onload = () => {

    input.focus();

};