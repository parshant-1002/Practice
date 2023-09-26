import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
export default function DetailsShow() {
  const [apidata, setApiData] = useState([]);
  const navigate = useNavigate();
  function getData() {
    axios
      .get("https://6406ceb877c1a905a0e3b7d3.mockapi.io/data")
      .then((val) => setApiData(val.data));
  }
  function handleDelete(id) {
    axios
      .delete(`https://6406ceb877c1a905a0e3b7d3.mockapi.io/data/${id}`)
      .then(() => getData());
  }
  useEffect(() => {
    getData();
  }, []);
  const StyledIcon = styled(FontAwesomeIcon)`
    color: green;
  `;
  const StyledDeleteIcon = styled(FontAwesomeIcon)`
    color: red; /* Set the color for the delete icon */
  `;

  return (
    <div class="container justify-content-center ">
      <div class="row p-5 px-5 pe-5">
        <div class="column-md-12">
          <div class="table-responsive">
            <table class="table table-bordered table-secondary  shadow caption-top">
              <thead>
                <tr>
                  <th>Sr.no</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Contact no.</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {apidata?.length
                  ? apidata?.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.e_name}</td>
                          <td>{item.e_age}</td>
                          <td>{item.e_email}</td>
                          <td>{item.e_contact}</td>
                          <td>
                            <div
                              class="btn-group"
                              role="group"
                            >
                              <button
                                class="btn  mx-2"
                                onClick={() => {
                                  navigate(`/edit/${item.id}`);
                                }}
                              >
                                <StyledIcon icon={faEdit} />
                              </button>
                              <button
                                class="btn  mx-2"
                                onClick={() => {
                                  handleDelete(item.id);
                                }}
                              >
                                <StyledDeleteIcon icon={faTrashAlt} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
