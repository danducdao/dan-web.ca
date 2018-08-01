/*
* Program : Class FileUpload
* Écrit par : Dan Duc Dao
*/

enum Dimension
{
    HEIGHT = 135,
    WIDTH = 192,
    NONE = 0
}
export class FileUpload
{
     private uploadStatus:boolean = false;
     public height:number = Dimension.HEIGHT;
     public width:number = Dimension.WIDTH;
     private file:string;
     public styleXRemove:any = {
                                  position:'absolute',
                                  top:0,
                                  right:0,
                                  borderRadius:'10px',
                                  margin:'1px 2px 0px 0px',
                                  display : 'inherit'
                               };

     constructor(){}

     FileToSave(file:string)
     {
         this.file = file;
     }

     refreshImage(status:boolean,model):void
     {
          if (status == true)
          {
              this.height = Dimension.HEIGHT;
              this.width = Dimension.WIDTH;
              this.uploadStatus = status;
              model.photo = this.file;
          }
      }

      removeImage(event:any,model):void
      {
          this.height = Dimension.NONE;
          this.width = Dimension.NONE;
          model.photo = "";
          this.uploadStatus=false;
          event.preventDefault();
      }


}
