const APIAddress = "https://cors-anywhere.herokuapp.com/http://52.15.216.252:8080/teameval/Eval/1.0.0/";


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
       return fetch(APIAddress + "/survey", {
           method: 'PUT',
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

   /*
       Returns: A list of all the names of surveys the user has created in the past
   */
   export const getEvalNames = () =>
   {
       return fetch(APIAddress +"surveys")
                .then(response =>response.json())
                .then((responseData) => {
                    console.log(responseData);
                    return responseData;
                })
   }