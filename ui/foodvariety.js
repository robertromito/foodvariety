async function getEaters() {
    try {
        const res = await fetch("/eaters", {
            mode: "cors",
        })
        const data = await res.json()
        return data._embedded.eaters
    } catch (e) {
        console.error(e)
        throw Error("Unable to talk to the server");
    }
}

async function postFoodEaten(eater, food) {
    try {
        const res = await fetch('/consumed', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                message: `${eater} ${food}`
            })
        })

        if (res.ok) {
            return `It shall forever be known that ${eater} ate ${food}`
        } 

    } catch (e) {
        console.error(e)
        throw Error("Unable to talk to the server")
    }

    throw Error(`The server had trouble processing your food`)
}

module.exports = { getEaters, postFoodEaten }