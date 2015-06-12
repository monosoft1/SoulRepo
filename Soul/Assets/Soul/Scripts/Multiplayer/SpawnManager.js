#pragma strict

public static var control : SpawnManager;

public static var RedPlayer : GameObject;
public static var BluePlayer : GameObject;

var RedPlayerStatus : GameObject;
var BluePlayerStatus : GameObject;

public static var Dead : boolean = true;
var DeadStatus : boolean = false;

public static var Connection : boolean = false;
var ConnectionStatus : boolean = false;

public static var CurTeam : String = "";

public static var RespawnB : GameObject;
var RespawnBStatus : GameObject;

public static var NDisconnectB : GameObject;
var NDisconnectBStatus : GameObject;

public static var TSCanvasO : GameObject;
var TSCanvasOStatus : GameObject;

public static var TSButtons : GameObject;
var TSButtonsStatus : GameObject;

public static var PlayerStatus : GameObject;
var PlayerStatusS : GameObject;

var CurTeamStatus : String = SpawnManager.CurTeam;

public static var SpawnPointRed : GameObject;
public static var SpawnPointBlue : GameObject; 

var SpawnPointRedStatus : GameObject;
var SpawnPointBlueStatus : GameObject; 

function Awake ()
{
   SpawnManager.BluePlayer = BluePlayerStatus;
   SpawnManager.RedPlayer = RedPlayerStatus;
   
   SpawnManager.SpawnPointBlue = SpawnPointBlueStatus;
   SpawnManager.SpawnPointRed = SpawnPointRedStatus;
   
   SpawnManager.Connection = ConnectionStatus;
   
   SpawnManager.Dead = DeadStatus;
   
   SpawnManager.RespawnB = RespawnBStatus;
   
   SpawnManager.NDisconnectB = NDisconnectBStatus;
   
   SpawnManager.TSCanvasO = TSCanvasOStatus;
   
   SpawnManager.TSButtons = TSButtonsStatus;
   
   SpawnManager.PlayerStatus = PlayerStatusS;
}

function Update () 
{
    CurTeamStatus = SpawnManager.CurTeam;
    
    SpawnManager.BluePlayer = BluePlayerStatus;
    SpawnManager.RedPlayer = RedPlayerStatus;
    
    SpawnManager.SpawnPointBlue = SpawnPointBlueStatus;
    SpawnManager.SpawnPointRed = SpawnPointRedStatus;
    
    ConnectionStatus = SpawnManager.Connection;
    SpawnManager.Connection = ConnectionStatus;
    
    DeadStatus = SpawnManager.Dead;
    SpawnManager.Dead = DeadStatus;
    
    SpawnManager.RespawnB = RespawnBStatus;
    
    SpawnManager.NDisconnectB = NDisconnectBStatus;
    
    SpawnManager.TSCanvasO = TSCanvasOStatus;
   
    SpawnManager.TSButtons = TSButtonsStatus;
    
    SpawnManager.PlayerStatus = PlayerStatusS;
     
    if(ConnectionStatus == true && DeadStatus == true && CurTeamStatus != "")
    {
       SpawnManager.TSCanvasO.SetActive(true);
       SpawnManager.TSButtons.SetActive(false);
       SpawnManager.RespawnB.SetActive(true);
    }
    if(SpawnManager.Connection == false && SpawnManager.Dead == true)
    {
       SpawnManager.TSCanvasO.SetActive(true);
       SpawnManager.TSButtons.SetActive(true);
       SpawnManager.RespawnB.SetActive(false);
    }
       
    if(Network.peerType == NetworkPeerType.Disconnected)
    {
       if(SpawnManager.Connection == false)
       {
          SpawnManager.PlayerStatus.SetActive(false);
          TSCanvasOStatus.SetActive(false);
          NDisconnectBStatus.SetActive(true);
       }
       if(SpawnManager.Connection == true)
       {
          TSCanvasOStatus.SetActive(true);
          NDisconnectBStatus.SetActive(false);
       }
    }
}