import styled from "styled-components";

export const CardStyle = styled.div`
display:flex;
height: 210px;
width: 440px;
margin-left:40px;
margin-bottom: 56px;
border-radius: 12px;
background-color:${(props) => props.color};
color:white;
position:relative;

  .inputs{
    display:flex;
    flex-direction:column;
    margin-left: 24px;
    margin-top:24px;
    font-family: 'Inter';
    
}
.left{
    h1{
text-align: left;
font-size: 32px;
font-weight: 700;
margin-top:10px;
margin-bottom:12px;
    }
    span{
font-family: Inter;
font-size: 20px;
font-weight: 700;

    }   
} 
    
.types-details{
    display:flex;
    flex-direction: column;
    min-height:auto;
}
.type{
    display:flex;
    
}

.details{
    padding-top:20px;
    text-decoration:underline;
    margin-top:auto;
    margin-bottom: 12px;
    cursor:pointer;
    }
   
 
 

.sprites{
position: absolute;
width: 193px;
height: 193px;
right:12px;
top: -52px;
z-index:1;
}
.pokebola{
z-index:0;
position: absolute;
right:-36px;
top: -52px;
}
.add-remove{
    margin-top: 155px;
    margin-left: 26px;
}
button{
position:absolute;
z-index:1;
height: 38px;
width: 146px;
border-radius: 8px; 
margin-bottom:12px; 
padding: 4px 10px 4px 10px;
margin-top:auto;
margin-right:22px; 
border:none;
cursor:pointer;

}
 
`;
