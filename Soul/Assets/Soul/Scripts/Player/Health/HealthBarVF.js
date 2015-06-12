#pragma strict



function Start () 
{
   GetComponentInParent.<UnityEngine.UI.Text>().text = Health.Health.ToString();
}

function Update () 
{
   GetComponentInParent.<UnityEngine.UI.Text>().text = Health.Health.ToString();
}