#pragma strict



function Start () 
{
   GetComponentInParent.<UnityEngine.UI.Text>().text = Health.HealthV.ToString();
}

function Update () 
{
   GetComponentInParent.<UnityEngine.UI.Text>().text = Health.HealthV.ToString();
}