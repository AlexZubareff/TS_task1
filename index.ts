import {IUser, usersArray} from "./users";
import {userInfoArray} from "./userInfo";

interface INewObj {
    name: string,
    gender: string,
    age: number,
    position: string
}

function getUsersJobPositions(users: IUser[]):INewObj[] {
    const newArray:INewObj[] = [];
    users.map(user => {
       let userInfo = userInfoArray?.find(item => item.userid == user.userid);
       if(userInfo != undefined && userInfo.organization != undefined) {
           let newObj:INewObj = {
               age: userInfo.age,
               gender: user.gender,
               name: user.name,
               position: userInfo.organization.position,
           };
           newArray.push(newObj);
       }
    })
return newArray;
}
const usersPositions = getUsersJobPositions(usersArray);
console.log( usersPositions);