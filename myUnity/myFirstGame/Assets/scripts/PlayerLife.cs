using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerLife : MonoBehaviour
{
    string ENEMY_TAG = "enemyBody";
    private void OnCollisionEnter(Collision collision) 
    {
        if (collision.gameObject.CompareTag(ENEMY_TAG))
        {
            UnityEngine.Debug.Log("player dead");
            PlayerDead();
        }
    }

    void PlayerDead()
    {
        // try to find things to adjust when player considered dead
        // bool Rigidbody.isKinematic : Controls whether physics affects the rigidbody.
        GameObject.Find("SportsCar").transform.localPosition =  new Vector3(0,0,-5);
        GetComponent<Rigidbody>().isKinematic = true;
        GetComponent<PlayerMovement>().enabled = false;
    }

    void ReloadLevel()
    {
        
    }
}
