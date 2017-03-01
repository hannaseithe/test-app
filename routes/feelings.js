var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://hanna:hanna@ds157819.mlab.com:57819/test-app');


//Get all Feelings
router.get('/feelings', function(req, res, next){
	db.feelings.find(function(err, feelings) {
		if(err){
			res.send(err);
		}
		res.json(feelings);
	});
});

// Get Single Feeling
router.get('/feeling/:id', function(req, res, next) {
	db.feelings.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, feeling){
		if(err){
			res.send(err);
		}
		res.json(feeling);
	});
});

// Save Feeling
router.post('/feeling', function(req, res, next) {
	var feeling = req.body;
	if(!feeling.name || !feeling.description){
		res.status(400);
		res.json({
			"error": "Not all required fields provided"
		});
	} else {
		db.feelings.save(feeling,function(err, feeling){
			if(err){
				res.send(err);
			}
			res.json(feeling);
		});
	}
})

// Delete Feeling
router.delete('/feeling/:id', function(req, res, next) {
	db.feelings.remove({_id: mongojs.ObjectId(req.params.id)},function(err, feeling){
		if(err){
			res.send(err);
		}
		res.json(feeling);
	});
});

//Update Feeling
router.put('/feeling/:id', function(req, res, next) {
	var feeling = req.body;
	var updFeeling = {};
	
	if(feeling.name){
		updFeeling.name = feeling.name;
	}
	
	if(feeling.description){
		updFeeling.description = feeling.description;
	}
	
	if(feeling.state){
		updFeeling.state = feeling.state;
	}
	
	updFeeling._id = mongojs.ObjectId(req.params.id);
	
	if(!updFeeling){
		res.status(400);
		res.json({
			"error": "No data provided for updating"
		});
	} else {
		db.feelings.save(updFeeling,function(err, feeling){
			if(err){
				res.send(err);
			}
			res.json(feeling);
		});
	}
});


module.exports = router;