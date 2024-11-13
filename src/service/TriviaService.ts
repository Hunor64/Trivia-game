export async function getTrivias(){
    try {
    const response = await fetch("/public/api.json")
    return response.json();
    }
    catch(error){
        console.error(error);
        return undefined;
    }

}