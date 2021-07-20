# Designerasun Portfolio
This is a workplace of designerasun, containing several projects(case studies) that the owner has been studying. 

Github: https://github.com/designerasun
Medium: https://designerasun.medium.com/

 
** Team Case Study participated

* goBlock program Hackathon 
    https://youtu.be/wY4mBHACn08 
   
- Blockchain consensus algorithm concept proposal
    Proof of Safe Number(PoSN)
    https://github.com/designerasun/golang/blob/master/PoSN/demo/demo.go

* Hyperledger Fabric Demo(Front End Modification)
    https://youtu.be/4N7nvLq-9Qg


** Side projects
  * Folder generator
    https://youtu.be/KyOQGR0VlBc
    
  * Screenshot automator
    (YT link will be added)
  
  * Blockchain DID project
    (YT link will be added)
  
  * A.I Cat language translator
    (YT link will be added)
    





============================================================================================================================================
2-1) NFT Storage Vaults

- Project overview
 As the value of digital assets such as NFT and cryptocurrency is steadily growing with digital transformation, we, Team Kosk, have found that the needs to safely store those digital assets are growing but the services that provide such secure storage are not fully matched with the needs. Thus, we would like to suggest and develop a PoVN project like below as a solution to one of NFT’s issues: platform evaporation. 

*NFT is non-fungible-token.Documentation of digital asset ownership using blockchain. 

- Business Model


- Issue
 Even though NFT has a great potential as a way to specify ownership of digital assets and thus can shed a light towards digital artists who have been suffering from lack of copyright protection, it does have its own issues that should be solved. 

1) Energy consumption
2) Double ownership - preoccupation, hacking
3) Platform Evaporation - disappearance of original platform 

- Solution framework 
 Team Kosk has brainstormed experimental frameworks to the issues: double ownership and platform evaporation. We do not cover issue #1 here. Below, we tried to spell out our approaches to the issues with our own best. 

Issue
Solution
Platform Evaporation
Random Vaults
Double ownership
CA(Certificate Authority)


If a platform where an original NFT is stored dies, your NFT is gone forever. Most of the cases, NFT marketplace only ensures the ownership of the item, documenting it in blockchain. If we can use IPFS(InterPlanetary File System) to store the NFT, and make all the users that provide storage space random node(random vault), theoretically the item is moved from the original platform, and safely secured with decentralization.  

If solution a succeeds, now we can solve the double ownership problem with ease. We cannot prevent someone from copying someone else’s digital files and making it NFT. However, what we can do is to issue a credential towards NFTs that are stored in the vault (probably, somehow the DID technique should be applied here to prevent this CA from being centralized). To simply put, what we can do is to attach a credential label to NFT.

- Solution detail 
- Business application: 1) Digital asset storage 2) Authentication
- File storage: IPFS application (e.g. File coin)
- Consensus algorithm: Proof of Vault Number, PoVN
- Cryptography: Current - RSA or ECC or Elgamal. Most likely ECC, future - Quantum 


- Current service provider analysis

Service provider
Problems
Trust Wallet
Only available in mobile
Cashing out delay
Meta Mask
Web-based wallet
Secret words scam
Fees
d’cent
-


- Incentives


