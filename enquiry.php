<?php
$field_pickup = $_POST['pickup-address'];
$field_drop = $_POST['drop-address'];
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_phone = $_POST['phone'];
$field_from = "BOOKING ENQUIRY FROM Drop Taxi India";

$mail_to = 'droptaxiindia21@gmail.com';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'Pickup Location: '.$field_pickup."\n";
$body_message .= 'Drop Location: '.$field_drop."\n";
$body_message .= 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Phone: '.$field_phone."\n";
$body_message .= 'Form From: '.$field_from;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for contacting us. Someone will be in touch with you shortly');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to droptaxiindia21@gmail.com');
		window.location = 'index.html';
	</script>
<?php
}
?>