#pragma strict

var rPText : String;

function VChanged ()
{
      rPText = GameObject.FindGameObjectWithTag("RemotePT").GetComponent.<UnityEngine.UI.InputField>().text;
      if(rPText == "")
      {
         DirectConnection.remotePort = 0;
      } 
      else
      {
         DirectConnection.remotePort = int.Parse(rPText); 
      }
}