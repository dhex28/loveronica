<?php

namespace App\Controllers;
use CodeIgniter\Restful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Controllers\BaseController;
use App\Models\DenyReasonModel;

class DenyReasonController extends ResourceController
{
    public function saveDenyReason()
    {
        $model = new DenyReasonModel();

        // Get the JSON data sent from the client
        $json = $this->request->getJSON();

        // Assuming the JSON data matches the expected structure
        $data = [
            'description' => $json->description,
           
        ];

        // Insert the booking data into the database
        $model->insert($data);

        // You can send a response back to the client if needed
        return $this->response->setJSON(['message' => 'Booking successfully created']);
    }
}
