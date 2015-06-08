#pragma strict


function Changed () 
{
   DirectConnection.remoteIPadress = GameObject.FindGameObjectWithTag("RemoteIPT").GetComponent.<UnityEngine.UI.InputField>().text;  
}