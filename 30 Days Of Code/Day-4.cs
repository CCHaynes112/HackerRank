class Person {
    public int age;     
	public Person(int initialAge) {
        if(initialAge < 0) {
            Console.Write("Age is not valid, setting age to 0.\n");
            age = 0;
        }
        else {
            age = initialAge;
        }
     }
     
     public void amIOld() {
         if(age < 13) {
             Console.Write("You are young.\n");
         }
         else if(age >= 13 && age < 18) {
             Console.Write("You are a teenager.\n");
         }
         else {
             Console.Write("You are old.\n");
         }
     }

     public void yearPasses() {
        age++;
     }