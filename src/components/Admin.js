import { useAddAccountMutation, useGetAccountsQuery } from "../api/adminSlice";

function Admin() {
    const {data }= useGetAccountsQuery();
    const[addAccount]=useAddAccountMutation();
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {data && data.map(account=><p>{account.id} :{account.name}</p>)}
        <button onClick={()=>addAccount(data.length+2,"Vivian Graham")}>Add Account</button>
      </div>
    </div>
  );
}

export default Admin;