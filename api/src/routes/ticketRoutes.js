const router = require("express").Router();
const {
  getTickets,
  getTicketById,
  addTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");

router.get("/", getTickets);
router.get("/:id", getTicketById);
router.post("/", addTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);

module.exports = router;
