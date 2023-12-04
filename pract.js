function fun1() 
{
   const a = 12;
   const b = "as";

   if(typeof a === 'number' && typeof b === 'string')
   {
      console.log(typeof a === 'number',typeof b === 'string',a ,b ,"first");
   }



   if(a !== '12' && b !== 'as')
   {
      console.log(a !== '12',b !== 'as',a ,b,"second");
   }




   if(typeof a === 'string' && typeof b === 'number')
   {
      console.log(typeof a === 'string', typeof b === 'number',a ,b,"third");
   }



   if(typeof a !== 'string' && typeof b !== 'number')
   {
      console.log(typeof a !== 'string', typeof b !== 'number',a ,b,"fourth");
   }
   
}
fun1();