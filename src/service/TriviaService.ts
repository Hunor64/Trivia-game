export async function getTrivias(){
    try {
    const response = await fetch("/api.json")
    return response.json();
    }
    catch{
        return undefined;
    }

}