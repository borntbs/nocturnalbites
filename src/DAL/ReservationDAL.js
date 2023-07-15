

export const addReservation = async (req) =>{
    const date = new Date();
    const response = await fetch(
      "https://3w1dvat749.execute-api.ap-southeast-2.amazonaws.com/ReservationsDAL",
      {
        method:"POST",
        body:JSON.stringify({
            TableName:"Reservation",
            Item:{
                    Email:"johnnytest@gmail.com",
                    DateTime: "test:testam"
                }
        })
      }
    );
    const body = await response.json();
    console.log(response,body)
}

export const getReservations = async() =>{
    const response = await fetch(
        "https://3w1dvat749.execute-api.ap-southeast-2.amazonaws.com/ReservationsDAL?TableName=Reservation",
    );
    const body = await response.json();
    const data = body.Items;
    return data;
}
