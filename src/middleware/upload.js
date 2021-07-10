const multer = require('multer');

const storagePathAndFileName = multer.diskStorage({
	destination: '/Arkademy/Tugas/Tugas_RestApi/images',
	filename: (req, file, cb) => {
		const unique = Date.now();
		cb(null, unique + '-' + file.originalname);
	},
});

const filter = (req, file, cb) => {
	if (
		file.mimetype == 'image/jpg' ||
		file.mimetype == 'image/png' ||
		file.mimetype == 'image/jpeg'
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: storagePathAndFileName,
	fileFilter: filter,
});

module.exports = upload;
