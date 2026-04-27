let leapyear = 1990;
if((leapyear%4 === 0 && leapyear%100 !== 0) || (leapyear%400 === 0))
{
    console.log(`${leapyear} is an leap year`);  
} 
else
{
    console.log("Not an leap year")
}
