var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
function validateForm(){



    var pipeline = document.getElementById('pipeline').value;
    var gcsProject = document.getElementById('gcs-project').value;
    var gcsBucket = document.getElementById('gcs-bucket').value;
    var cloudInput = document.getElementById('cloud-input').value;
    var run = document.getElementById('run').value;

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

        if(format.test(obj)){
            if(obj[0] == "+" || obj[0] == "-" || obj[0] == "_"){
                alert("Fields cannot start with '+','_','-'");
            }else{
            alert("special characters not allowed");
            }
            return false
        }else{
            return true
        }
    }

