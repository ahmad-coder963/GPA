// JavaScript Document
KHStyle="";
function ChangeImageTo(doc,img,Toimg)
{
if (doc.images.length>0)
{
if (doc.images[img]!=null)
{
	 if (KHStyle=='')
	 {
		 doc.images[img].src="../gen_images/"+Toimg+".gif";
	 }
	 else //We Added this condition for future addons.
	 {
		 doc.images[img].src="../gen_images/"+Toimg+'_'+KHStyle+".gif";
	 }
}
}
}

function ApplyStyle()
{
  ChangeImageTo(document,'AnimationLogoUp','Animation_LogoUp');	
}

function WindowContextMenu()
{
	 window.event.returnValue=false;
}
 