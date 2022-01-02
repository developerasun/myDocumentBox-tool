
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class eventFuncScript : MonoBehaviour
{
    // Awake : executed on a current scene once when the object is active
    // used to initialize game object
    private void Awake() {
        Debug.Log("awake func executed");
    }

    // onEnable : execute whenever a component gets active
    private void OnEnable() {
        Debug.Log("onEnable executed");
    }
    private void OnDisable() {
        Debug.Log("onDisable executed");
    }

    // Start funciton gets called before the first Update function
    // game object and component should be active
    // used to initialize data
    // Awake => OnEnable => Start
    private void Start() { 
        Debug.Log("Start function exectued");
    }

    // Update funciton gets called per frame when component is active
    // if FPS is 60, it means the funciton executes 60 times per second
    private void Update() {
        Debug.Log("Update funciton executed");
    }

    private void LateUpdate()
    {
        Debug.Log("LateUpdate func executed");
    }

    // unlike Update//LateuUpdate, FixedUpdate executes at a fixed number per frame
    private void FixedUpdate()
    {
        Debug.Log("FixedUpdate func executed"); 
    }

    // OnDestroy executes when game object gets destroyed, scene changes, and game finishes.
    private void OnDestroy()
    {
        Debug.Log("OnDestroy func executed"); 
    }

    // OnApplicationQuit exeuctes when game finishes. 
    private void OnApplicationQuit()
    {
        Debug.Log("OnApplicationQuit func executed"); 
    }
}
