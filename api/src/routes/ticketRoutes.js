const router = require("express").Router();
const {
  getTickets,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");
const auth = require("../middlewares/auth");

router.get("/", getTickets);
router.get("/:id", getTicketById);
router.post("/", auth, addTicket);
router.put("/:id", auth, updateTicket);
router.delete("/:id", auth, deleteTicket);

module.exports = router;
