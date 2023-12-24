<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\Restful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\ReservationAmenitiesModel;

class ReservationAmenitiesController extends ResourceController

{


    use ResponseTrait;

    protected $model;

    public function __construct()
    {
        $this->model = new ReservationAmenitiesModel();
    }

    public function index()
    {
        // Retrieve and return existing reservations (if needed)
        $reservations = $this->model->findAll();
        return $this->respond($reservations);
    }

    public function create()
    {
        // Receive reservation data from the frontend
        $data = $this->request->getJSON(true);

        // Assuming the JSON data matches the expected structure
        $reservationData = [
            'name' => $data['name'], // Adjust based on your database structure
            'date' => $data['date'],
            'customer_name' => $data['customer_name'],
            'contact' => $data['contact'],
            'email' => $data['email'],
            'address' => $data['address'],
        ];

        // Insert the reservation data into the database
        $result = $this->model->insert($reservationData);



        if ($result) {
            return $this->respondCreated(['message' => 'Reservation created successfully']);
        } else {
            return $this->respond(['error' => 'Failed to create reservation'], 500);
        }
    }


    public function getReservationAmenities()
    {
        // Assuming you have a BookingRoomModel to interact with the database
        $model = new ReservationAmenitiesModel();

        // Fetch booking details from the database
        $reservationDetails = $model->findAll(); // You might need to adjust this based on your database schema and requirements

        // Return the reservation details as JSON
        return $this->response->setJSON($reservationDetails);
    }
    public function updateReservationStatus($id)
{
    $model = new ReservationAmenitiesModel();
    $existingReservation = $model->find($id);

    if (!$existingReservation) {
        return $this->respond(['error' => 'Reservation not found.'], 404);
    }

    // Get the status from the request
    $newStatus = $this->request->getJSON()->status;

    // Validate the status - You can add more validation as needed
    if (!in_array($newStatus, ['approved', 'denied'])) {
        return $this->respond(['error' => 'Invalid status.'], 400);
    }

    // Update the status of the Reservation
    $data = ['status' => $newStatus];
    $model->set($data)->where('id', $id)->update();

    // Fetch the updated data after the update
    $updatedReservation = $model->find($id);

    // Include the updated data in the response
    return $this->respond(['message' => 'Reservation status updated successfully.', 'data' => $updatedReservation], 200);
}
}
