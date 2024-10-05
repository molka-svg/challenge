var books=[ { id: 1, title: "Atomic Habits", author: "James Clear", price: "15" },
{ id: 2, title: "Le crépuscule d'une isode", author: "Micheal Ofrer", price: "4" }
];
var suprimerUnLivre=document.getElementById("suprimerUnLivre");
var tbody=document.querySelector("tbody");
var confirmebtn=document.getElementById("confirmer");
function confirmer(){
    const id=document.getElementById("id").value;
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const price=document.getElementById("price").value;
 
        if (id.length === 0 || title.length === 0 || author.length === 0 || price.length === 0) {
            alert("Veuillez remplir tous les champs correctement");
        }
        else{  
    var book={id:parseInt(id),title:title,author:author,price:price};
    books.push(book);

    Afficher_La_Liste_Des_Livres();
}}
function Ajouter_un_livre(){
    confirmebtn.style.display="block";
    var form=document.getElementById("form");
    form.style.display="block";  
     form.reset();
}
function Afficher_La_Liste_Des_Livres(){
   tbody.innerHTML="";
    books.forEach((book,i)=>{
    tbody.innerHTML += `
    <tr>
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price} DT</td>
        <td><button class="btn btn-success" onclick="Supprimer_Un_Livre(${i})" id="suprimerUnLivre">Supprimer le livre</button></td>
    </tr>
`;
})
document.getElementById("form").style.display="none"
    confirmebtn.style.display="none"
}
function Supprimer_Un_Livre(mm){
    if (confirm("Êtes-vous sûr de vouloir supprimer ce livre ?")) {
        books.splice(mm,1);
        Afficher_La_Liste_Des_Livres();
    }}


