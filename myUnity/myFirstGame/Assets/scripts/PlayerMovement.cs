using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
 
    Rigidbody rb; 
    // SerializeField: Force Unity to serialize a private field. You can directly
    // adjust this variable in Unity editor.
    [SerializeField]float UNIT_SPEED = 5f;
    
    [SerializeField]Transform groundCheck;
    [SerializeField]LayerMask ground;

    // variable with public access modifier can be accessed in other scripts
    // use it with caution
    public int accessThisVariable = 55;

    bool IsGrounded()
    {
        return Physics.CheckSphere(groundCheck.position, .1f, ground);
    }

    // prefab : template for object
    void MoveCharcter() { 

        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");

        rb.velocity = new Vector3(horizontalInput * UNIT_SPEED, rb.velocity.y, verticalInput * UNIT_SPEED);

        if (Input.GetButtonDown("Jump") && IsGrounded())
        {
            rb.velocity = new Vector3(rb.velocity.x, UNIT_SPEED, rb.velocity.z);
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        // declare a variable for Rigidbody component
        // instatiation
        rb = GetComponent<Rigidbody>();
        
    }

    // Update is called once per frame
    void Update()
    {
        MoveCharcter();
    }

}
