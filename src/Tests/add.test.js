const sum =( a , b )=>(a+b) ; 


const greeting  = (names = "anonymous")=>(`welcome back! ${names}`)
// jest provide the global variable to generate our testcases 
// that variables only available in test files globally ; 


// jest provide us assertion liberary eg . expact  jest provide te some function 
//through which  we can made our asserion for the value that we expact from the function

test("should add two numbers" ,( )=>{
    const result  = sum(3,4) ; 
   expect(result).toBe(7)
})

test ("when name passed" , ()=>{
    const result = greeting("Mike"); 
    expect(result).toBe("welcome back! Mike");
})

test("when name is not passed" ,()=>{
    const result  = greeting() ; 
    expect(result).toBe("welcome back! anonymous");
})


