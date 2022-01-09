using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerLife : MonoBehaviour
{
    public string ENEMY_TAG = "enemyBody";
    public string TRAPGROUND_TAG = "trapGround";
    public float DROPLIMIT = 100f;
    private void OnCollisionEnter(Collision collision) 
    {
        if (collision.gameObject.CompareTag(ENEMY_TAG) | collision.gameObject.CompareTag(TRAPGROUND_TAG))
        {
            // try to find things to adjust when player considered dead
            // bool Rigidbody.isKinematic : Controls whether physics affects the rigidbody.
            GameObject.Find("SportsCar").transform.position =  new Vector3(1.37f, 1.11f, -6.75f);
            GetComponent<Rigidbody>().isKinematic = true;
            GetComponent<PlayerMovement>().enabled = false;
            PlayerDead();
        }
    }

    void PlayerDead()
    {
        UnityEngine.Debug.Log("player dead");
        // Invoke : Invokes the method methodName in time seconds.
        Invoke(nameof(ReloadLevel), 1f);
        // ReloadLevel();
    }

    void ReloadLevel()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name); // change scene name dynamically rather than hard coded
    }

    void Update()
    {
        if (transform.position.y < -DROPLIMIT*3)
        {
            PlayerDead();
        }
    }
}
