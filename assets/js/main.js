class Medicamento{
    constructor(){
        this.id = 1
        this.arrayListaMedicamento = []
    }

    cadastrar(){
        event.preventDefault();
       let medicamento = this.lerDados()
        if(this.Validar(medicamento) == true){
            this.Salvar(medicamento)
        }
        this.Listar()
        this.cancelar()

        console.log(this.arrayListaMedicamento)
    }
    

    lerDados(){
        let medicamento = {}
        medicamento.id = this.id
        medicamento.nomeMed = document.getElementById("inome").value
        medicamento.quantMed = document.getElementById("iquant-disp").value
        medicamento.classeMed = document.getElementById("iclass-med").value
        return medicamento
    }

    Validar(medicamento){
        let msg =""
        if(medicamento.nomeMed == ""){
            msg+= "error nome medicamento \n"
        }
        if(medicamento.quantMed == ""){
            msg+= "error quantidade medicamento \n"
        }
        if(medicamento.classeMed == ""){
            msg+= "error classe medicamento"
        }
        if(msg != ""){
            alert(msg)
            return false
        }
        return true
    }

    Salvar(medicamento){
        this.arrayListaMedicamento.push(medicamento)
        this.id++
    }

    cancelar(){
     document.getElementById("inome").value =""
     document.getElementById("iquant-disp").value =""
     document.getElementById("iclass-med").value =""
    }

    Listar(){
        let tbody = document.getElementById("tbody")
        tbody.innerText = ""

        for(let i=0; i<this.arrayListaMedicamento.length; i++){
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_nomeMed = tr.insertCell()
            let td_quant = tr.insertCell()
            let td_classMed = tr.insertCell()
            let td_del = tr.insertCell()

            td_id.innerText = this.arrayListaMedicamento[i].id
            td_nomeMed.innerText = this.arrayListaMedicamento[i].nomeMed
            td_quant.innerText = this.arrayListaMedicamento[i].quantMed
            td_classMed.innerText = this.arrayListaMedicamento[i].classeMed

            let image = document.createElement("img")
            image.src="assets/img/lixeira.png"
            image.setAttribute("onclick", "medicamento.Deletar("+this.arrayListaMedicamento[i].id+")")
            td_del.appendChild(image)
        }
    }

    Deletar(id){
        let tdoby = document.getElementById("tbody")
        for(let i=0; i<this.arrayListaMedicamento.length; i++){
            if(this.arrayListaMedicamento[i].id == id){
                this.arrayListaMedicamento.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
    }


}

let medicamento = new Medicamento()