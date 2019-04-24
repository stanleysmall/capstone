const APIAddress = "http://3.16.152.189:8080/teameval/Eval/1.0.0/";


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
                console.log(responseData);
                return responseData;
            })
}

export const getResults = (cat_type, cat_name) =>
{
	return fetch(APIAddress + "results?cat_type="+ cat_type + "&cat_name=" + cat_name)
			.then(response =>response.json())
			.then((responseData) => {
				console.log("results " + responseData);
				return responseData;
			})
}

export const publishEval = (name) =>
{
    /*eval = getEval(name);
    eval.published = true;
    putEval(eval);
    */

    return fetch(APIAddress +"publish?name=" + name)
    .then(response =>response.json())
    .then((responseData) => {
        console.log(responseData);
        return responseData;
    })
}

export const getTagValues = (cat_type) =>
{

	return fetch(APIAddress + "tag?cat_type=" + cat_type)
			.then(response =>response.json())
			.then((responseData) => {
				console.log("Tags " + responseData);
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

/*
    Returns: A list of all the names of surveys the user has created that have not been published yet
*/
export const getUnpublishedEvalNames = () =>
{
    return fetch(APIAddress +"surveys?tag_type=published&tage_value=false")
    .then(response =>response.json())
    .then((responseData) => {
        console.log(responseData);
        return responseData;
    })
}

/*
    Returns: A list of all the names of surveys the user has created that have been published
*/
export const getPublishedEvalNames = () =>
{
    return fetch(APIAddress +"surveys?tag_type=published&tage_value=true")
    .then(response =>response.json())
    .then((responseData) => {
        console.log(responseData);
        return responseData;
    })
}