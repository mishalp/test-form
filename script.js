var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var errField = ""

function inputValidation(){
    var err = document.querySelectorAll('.inp');
    err.forEach(element => {
        element.addEventListener('input', (e)=>{
            var input = document.getElementById(e.srcElement.id);
            validate(input)
        })
    });
}
inputValidation()

function validateForm(){



    var pipeline = document.getElementById('pipeline');
    var gcsProject = document.getElementById('gcs-project');
    var gcsBucket = document.getElementById('gcs-bucket');
    var cloudInput = document.getElementById('cloud-input');
    var run = document.getElementById('run');

    var err = document.querySelectorAll('.err');
    err.forEach(element => {
        element.innerHTML = ""
    });
    

     if(validate(pipeline)
      && validate(gcsProject)
       && validate(gcsBucket)
        && validate(cloudInput)
         && validate(run)){
        return true;
     }else{
        
       return false;   
     }
}

    function validate(obj){
        var val = obj.value;
        console.log(obj.id);
        document.getElementsByClassName(obj.id)[0].innerHTML = ""
        if(format.test(val)){
            if(val[0] == "+" || val[0] == "-" || val[0] == "_"){
                document.getElementsByClassName(obj.id)[0].innerHTML = `<p>Fields cannot start with '+','_','-'</p>`;
            }else{
            document.getElementsByClassName(obj.id)[0].innerHTML = `<p>special characters not allowed</p>`
            }
            console.log(obj);
            const field = document.getElementById(obj.id);
            obj.classList.add('error');
            return false
        }else{
            obj.classList.remove('error');
            return true
        }
    }

