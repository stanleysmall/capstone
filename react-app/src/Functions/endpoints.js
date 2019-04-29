const APIAddress = "http://teachingevaluations.org:8080/teameval/Eval/1.0.0/";
//const APIAddress = "http://3.16.152.189:8080/teameval/Eval/1.0.0/"

/*
    Arguments:
        toStore: an evaluation object you want to store in the database in the form:

        {  "URL": str,
            "instructor": str,
            "participants": [{"name": str,
                                "address": str}, ...],
            "questions": [{"ID": int,
                            "helpText": str,
                            "mandatory": bool,
                            "group": str,
                            "type": str,
                            "text": str}, ...],
            "name": str,
            tag name 2: str,
            tag name 3: str, ...} 

    Stores the passed evaluation in the database
*/
export const putEval = (toStore) =>
{
    console.log("storing survey");
    return fetch(APIAddress + "survey", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toStore)
    });
}

/*
    Arguments:
        name: a string which represents the name of the evaluation you want to fetch from the database    

    Returns: The JSON object which represents the corresponding evaluation in the database
*/
export const getEval = (name) =>
{
    return fetch(APIAddress +"survey?name=" + name)
            .then(response =>response.json())
            .then((responseData) => {
                return responseData;
            })
}

export const deleteSurvey = (name) =>
{
    console.log("deleting survey");
    return fetch(APIAddress +"survey?name=" + name, {
        method: 'DELETE'
    });
}

export const getResults = (cat_type, cat_name) =>
{
	return fetch(APIAddress + "results?cat_type="+ cat_type + "&cat_name=" + cat_name)
			.then(response =>response.json())
			.then((responseData) => {
				console.log(responseData);
				return responseData;
			})
}

export const markPublished = (name) =>
{   
    getEval(name)
    .then((response)=>{
        response.published = "T"
        console.log(response);
    })
}

export const publishEval = (name) =>
{   
    /*        getEval(name).then((response)=>{
            response.published = "T";
            putEval(response);
        });*/
    //markPublished(name);
    return fetch(APIAddress +"publish?name=" + name)
    .then(response =>response.json())
    .then((responseData) => {
        console.log("published" + name)
        return responseData;
    })
}

export const getTagValues = (cat_type) =>
{
	return fetch(APIAddress + "tag_values?tag_type=" + cat_type)
			.then(response =>response.json())
			.then((responseData) => {
				return responseData;
			})
}

/*
    Returns: A list of all the names of surveys the user has created in the past
*/
export const getEvalNames = () =>
{
    return fetch(APIAddress +"surveys")
            .then(response =>response.json())
            .then((responseData) => {
                return responseData;
            })
}

export const loginEndpoint = (key) =>
{
    return fetch(APIAddress +"login?key=" + key)
            .then(response => response.json())
            .then((responseData) => {
                console.log("logged In");
                return "logged In";
            })
}

/*
    Returns: A list of all the names of surveys the user has created that have not been published yet
*/
export const getUnpublishedEvalNames = () =>
{
    return fetch(APIAddress +"surveys?tag_type=published&tag_value=F")
    .then(response =>response.json())
    .then((responseData) => {
        return responseData;
    })
}

/*
    Returns: A list of all the names of surveys the user has created that have been published
*/
export const getPublishedEvalNames = () =>
{
    return fetch(APIAddress +"surveys?tag_type=published&tag_value=T")
    .then(response =>response.json())
    .then((responseData) => {
        return responseData;
    })
}
