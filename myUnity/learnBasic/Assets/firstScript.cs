// importing name space
using System.Collections;
using System.Collections.Generic;
using UnityEngine; // getting all the name spaces in Unity engine.

// class name and its parent. Hte MonoBehaviour is a pre-made class by Unity
// condition to apply C# script to Unity game object
// 1) file name and class name should be the same to apply C# script to your Unity game object. 
// 2) should inherit MonoBehaviour
public class firstScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
      Debug.Log("Started"); 
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
