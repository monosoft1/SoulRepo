#pragma strict

public static var SControl : SpawnManager;

var RedPlayer : GameObject;
var BluePlayer : GameObject;

var Dead = true;

public static var CurTeam : String = "";

var CurTeamStatus : String = SpawnManager.CurTeam;

var SpawnPointRed : GameObject;
var SpawnPointBlue : GameObject; 

function Update () 
{
    SpawnManager.CurTeam = CurTeamStatus;
}