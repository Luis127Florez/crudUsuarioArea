import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { UsuarioModel } from './usuario.model';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  formValue !: FormGroup;
  UsuarioModelobj : UsuarioModel = new UsuarioModel(); 
  UsuarioData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor( private formbuilber: FormBuilder,
    private api : ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      Nombre:[''],
      Apellidos:[''],
      Fecha_de_Nacimiento:[''],
      Email:[''],
      Numero_de_Documento:[''],
      Area:[''],
      Salario:[''],
      Estado:['']
    })
    this.getAllUsuario();
  }


  clickAddUsuario(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false; 
  }

  postUsuarioDetalle(){
    this.UsuarioModelobj.Nombre = this.formValue.value.Nombre;
    this.UsuarioModelobj.Apellidos = this.formValue.value.Apellidos;
    this.UsuarioModelobj.Fecha_de_Nacimiento = this.formValue.value.Fecha_de_Nacimiento;
    this.UsuarioModelobj.Email = this.formValue.value.Email;
    this.UsuarioModelobj.Numero_de_Documento = this.formValue.value.Numero_de_Documento;
    this.UsuarioModelobj.Area = this.formValue.value.Area;
    this.UsuarioModelobj.Salario = this.formValue.value.Salario;
    this.UsuarioModelobj.Estado = this.formValue.value.Estado;

    this.api.postUsuario(this.UsuarioModelobj).subscribe(res=>{
      console.log(res);
      alert('usuario guardado')
      let ref = document.getElementById('Cancelar')     
      ref?.click();
      this.formValue.reset();
      this.getAllUsuario();
    },
    err=>{
      alert('usuario no guardado');
    })
  }


  getAllUsuario(){
    this.api.getUsuario(this.UsuarioData).subscribe(res=>{
      this.UsuarioData = res;
    })
  }

  deleteUsuarioo(row : any){
    this.api.deleteUsuario(row.id).subscribe(res=>{
      alert('usuario eliminado');
      this.getAllUsuario();
    })
  }

  editUsuario(row : any){
    this.showAdd = false;
    this.showUpdate = true; 
    this.UsuarioModelobj.id = row.id;
    this.formValue.controls['Nombre'].setValue(row.Nombre);
    this.formValue.controls['Apellidos'].setValue(row.Apellidos);
    this.formValue.controls['Fecha_de_Nacimiento'].setValue(row.Fecha_de_Nacimiento);
    this.formValue.controls['Email'].setValue(row.Email);
    this.formValue.controls['Numero_de_Documento'].setValue(row.Numero_de_Documento);
    this.formValue.controls['Area'].setValue(row.Area);
    this.formValue.controls['Salario'].setValue(row.Salario);
    this.formValue.controls['Estado'].setValue(row.Estado);
  }
   updateUsuarioDetalle(){
    this.UsuarioModelobj.Nombre = this.formValue.value.Nombre;
    this.UsuarioModelobj.Apellidos = this.formValue.value.Apellidos;
    this.UsuarioModelobj.Fecha_de_Nacimiento = this.formValue.value.Fecha_de_Nacimiento;
    this.UsuarioModelobj.Email = this.formValue.value.Email;
    this.UsuarioModelobj.Numero_de_Documento = this.formValue.value.Numero_de_Documento;
    this.UsuarioModelobj.Area = this.formValue.value.Area;
    this.UsuarioModelobj.Salario = this.formValue.value.Salario;
    this.UsuarioModelobj.Estado = this.formValue.value.Estado;
    this.api.updateUsuario(this.UsuarioModelobj,this.UsuarioModelobj.id)
    .subscribe(res=>{
      alert("datos actualizados");
      let ref = document.getElementById('Cancelar')     
      ref?.click();
      this.formValue.reset();
      this.getAllUsuario();
    })
  }

}
