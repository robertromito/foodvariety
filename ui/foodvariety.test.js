const fv = require("./foodvariety.js")

const fetchMock = require("jest-fetch-mock")

fetchMock.enableMocks()

describe('getting eaters', () => {

    const eaters = JSON.stringify({
        "_embedded": {
            "eaters": [{
                "key": "rob",
                "name": "Robbie",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/eaters/1"
                    },
                    "eater": {
                        "href": "http://localhost:8080/eaters/1"
                    }
                }
            }, {
                "key": "dee",
                "name": "Deanna",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/eaters/2"
                    },
                    "eater": {
                        "href": "http://localhost:8080/eaters/2"
                    }
                }
            }, {
                "key": "nathan",
                "name": "Natey",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/eaters/3"
                    },
                    "eater": {
                        "href": "http://localhost:8080/eaters/3"
                    }
                }
            }, {
                "key": "kiley",
                "name": "Kiki",
                "_links": {
                    "self": {
                        "href": "http://localhost:8080/eaters/4"
                    },
                    "eater": {
                        "href": "http://localhost:8080/eaters/4"
                    }
                }
            }]
        },
        "_links": {
            "self": {
                "href": "http://localhost:8080/eaters"
            },
            "profile": {
                "href": "http://localhost:8080/profile/eaters"
            }
        },
        "page": {
            "size": 20,
            "totalElements": 4,
            "totalPages": 1,
            "number": 0
        }
    })

    beforeEach(() => {
        fetch.resetMocks()
    })

    it('returns the defined eaters as an array', async () => {
        fetch.mockResponseOnce(eaters)
        const actual = await fv.getEaters()
        expect(actual.length).toEqual(4)
        expect(actual[0].key).toEqual("rob")
        expect(actual[0].name).toEqual("Robbie")
    })

    it('returns the key and name for each eater', async () => {
        fetch.mockResponseOnce(eaters)
        const actual = await fv.getEaters()
        expect(actual[0].key).toEqual("rob")
        expect(actual[0].name).toEqual("Robbie")
    })
    
    it('returns an error if there is a fetch problem', async () => {
        fetch.mockReject(() => Promise.reject("API unavailable"))
        await expect(fv.getEaters()).rejects.toThrow("Unable to talk to the server")        
    })
})

describe('posting food eaten', () => {
    
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('returns a victorious message when posted successfully', async () => {
        fetch.mockResponseOnce({"ok": true})
        const actual = await fv.postFoodEaten("dee", "avocado")
        expect(actual).toEqual("It shall forever be known that dee ate avocado")
    })
    
    it('returns an error if there is a fetch problem', async () => {
        fetch.mockReject(() => Promise.reject("API unavailable"))
        await expect(fv.postFoodEaten("rob", "rice")).rejects.toThrow("Unable to talk to the server")        
    })
    
})