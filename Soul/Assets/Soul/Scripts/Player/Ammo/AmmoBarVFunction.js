#pragma strict

function Start () 
{
   GetComponentInParent.<UnityEngine.UI.Text>().text = Gun.Ammo.ToString();
}

function Update () 
{
   GetComponentInParent.<UnityEngine.UI.Text>().text = Gun.Ammo.ToString();
}