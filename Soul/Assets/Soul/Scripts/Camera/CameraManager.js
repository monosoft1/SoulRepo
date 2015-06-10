#pragma strict

var NorCam : GameObject;
var AimCam : GameObject;

var Aiming : boolean = false;

function Start () 
{
   if(GetComponent.<NetworkView>().isMine == false)
   {
      NorCam.SetActive(false);
      AimCam.SetActive(false);
   }
}

function Update () 
{
   if(Input.GetMouseButtonDown(1))
   {
      Aiming = true;   
   }
   if(Input.GetMouseButtonDown(1))
   {
      Aiming = false;   
   }
   
   if(Aiming == true)
   {
      AimCam.SetActive(true);
      NorCam.SetActive(false);
   }
   else
   {
      AimCam.SetActive(false);
      NorCam.SetActive(true);
   }
}