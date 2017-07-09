/**
 * Created by garytam on 2017-07-09.
 */
'use strict';

import mongoose from 'mongoose';

import { Router } from 'express';
import Task from '../model/task';
import config from '../config';

let hourOffset = config.hours_offset;

export default({config, db}) => {
    let api = Router();

    // ***************************************************** //
    //    get all task created within last x hours           //
    //    'v1/task'  e.g. http://localhost:3005/v1/task/     //
    // ***************************************************** //
    api.get('/', (req, res) =>{

        let d = new Date();
        console.log(hourOffset);
        d.setHours(d.getHours() - hourOffset);
        Task.find({'task_created_date_time': {'$gte': new Date(d.toISOString())}}, (err, tasks) => {
            if (err){
                res.send(err);
            }

            res.json(tasks);
        });
    });

    // ******************************************************************************************* //
    //    get task by object ID                                                                    //
    // 'v1/task/:id'  e.g. http://localhost:3005/v1/task/WTb2c4547b56fb357ef59a731c1624e752        //
    // ******************************************************************************************* //
    api.get('/:id', (req, res) => {
        console.log("find by Id => ", req.params.id);
       Task.findById(req.params.id, (err, task) => {
           if (err){
               res.send(err);
           }

           res.json(task);
       })
    });


    // ******************************************************** //
    //    update task                                           //
    //    'v1/task'  e.g. http://localhost:3005/v1/task/:id     //
    // ******************************************************** //
    api.put('/:id', (req, res) => {
       Task.findById(req.params.id, (err, task) => {
          if (err){
              res.send(err);
          }

          task.type = req.body.type;
          task.save(err => {
              if (err){
                  res.send(err);
              }

              res.send("task updated");
          });
       });
    });



    // '/v1/task/add'
    api.post('/add', (req, res) => {
        let newTask = new Task();
        newTask._id = req.body._id;
        newTask.type = req.body.type;

        newTask.save(err => {
            if (err){
                res.send(err);
            }

            res.json({message: "Task created"});
        })
    });

    return api;
}