import React from 'react';
import image from '../img/1.jpeg';

function FancyBorder(props) {
    return ( 
        <div className="parent" style={Object.assign(props.style, {
            display : 'inline-block',
            borderStyle:'solid',
            borderWidth:'2px', 
            borderColor: '#80d900', 
            borderRadius: '8%', 
            textAlign: 'center'})}>
            <div style={{
                padding:'8px', 
                backgroundColor:'#80d900', 
                borderTopLeftRadius:8,
                borderTopRightRadius:8, }}>
                <span style={{fontSize:'1.5rem', }}> 
                    {props.title} 
                </span>
            </div>
            <div style={{marginTop:8}}>{props.children}</div>
        </div>
    );
}

const styles = { 
    imageContainer : { 
        width: 50, 
        margin : 'auto',
    }, 
    image: { 
        width:50, 
        height: 50, 
        borderRadius:25, 
    }, 
    jobContainer: {
        padding:'16px', 
    }, 
    jobText: {
        fontSize:'20px', 
        fontWeight:'bold',
    }
}; 

class UserProfile extends React.Component { 
    constructor(props) {
        super(props); 
    }

    render() { 
        const { user } = this.props;
        return (
            <FancyBorder
                title={user.name}
                style={{width:'calc(33.3%-12px)', margin:4 }}>
                <div style={styles.imageContainer}>
                    <img 
                        alt="profile"
                        src={user.image}
                        style={styles.image}
                    />
                </div>
                <div style={styles.jobContainer}>
                    <span style={styles.jobText}>
                        {user.message}
                    </span>
                </div>
            </FancyBorder>
        );
    }
}

export default UserProfile; 