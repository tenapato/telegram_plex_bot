import { status } from "itty-router-extras";

//declare var URL: string;
async function getMe(request){
    const me = await fetch(TELEGRAM_URL + TELEGRAM_TOKEN + '/getMe', {
        method: 'GET',
      })

      return me;
}


async function sendText(message){
    const me = await fetch(TELEGRAM_URL + TELEGRAM_TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&parse_mode=Markdown&text=' + message, {
        method: 'GET',
      })

      return me;
}


export async function handleFetch(event){
    try{

        //const test = await getMe(event);
        //console.log(test);
        const text = await sendText(event);
        //send_text = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + bot_chatID + '&parse_mode=Markdown&text=' + bot_message

        

        return new Response(JSON.stringify({
            status: 200,
            message: 'Ok',
            body: text}), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
        })
    }catch(err){
        console.log(err);
    }
}


export async function hanldeSendMessage(event){
    try{
        console.log(JSON.stringify(event));
        await sendText('New Movie Added!');
        
        // var payload = JSON.parse(req.body.payload);
        // console.log('Got webhook for', payload.event);

        return new Response(JSON.stringify({
            status: 200,
            message: 'Ok',}), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
        })

    }catch(err){
        console.log(err);
    }
   
}