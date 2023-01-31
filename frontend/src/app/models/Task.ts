export class Task{
   public id?:number;
   public description:string;

   public createAt?:Date

   constructor(id:number, description:string,createAt:Date) {
      this.id = id;
      this.description = description;
      this.createAt = createAt;
   }
}
