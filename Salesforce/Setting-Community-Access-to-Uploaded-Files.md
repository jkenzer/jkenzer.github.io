# How do I set the default sharing on files uploaded via Dataloader to allow community access?

We bulk upload files to records on a monthly basis. These files are associated with a record ID and we need community users to have access to the file if they have access to the record. This can manually be done by going to the file details page and clicking share. Under "Who Can Access", you can toggle on Customer Access. However, we don't want to do this manually for over a thousand files per month.

[This article](https://help.salesforce.com/articleView?id=000320738&type=1&mode=1) describes the solution. It does [sound like](https://success.salesforce.com/ideaView?id=0873A000000E7mrQAC) there will be a more formal API solution to do this in the future, but for now, this trigger will suffice.

```
trigger SetFileVisibility on ContentDocumentLink (before insert) {
    for (ContentDocumentLink cdl : Trigger.new) {
        cdl.visibility = 'AllUsers';
    }
}
````

You can use the following SOQL to get the current value:
```SQL
SELECT ContentDocumentId,Id,LinkedEntityId,ShareType,Visibility FROM ContentDocumentLink WHERE ContentDocumentId = :yourDocumentId
```

There will always be at least two results returned. One is for the Owner of the record and one for the record that the file was uploaded to. For this solution, we only are concerned with the record the file was uploaded to, the non-005 LinkedEntityId. We need that to be Visibility = 'AllUsers'