
import ClientForm from "./ClientForm";
const ClientAdd = () => {

  return (
    <div>
      <button type="button" className="btn btn-primary table-buttons" data-bs-toggle="modal" data-bs-target="#exampleModal">
        +Add New
      </button>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-dark" id="exampleModalLabel">Add Client</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ClientForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientAdd;
