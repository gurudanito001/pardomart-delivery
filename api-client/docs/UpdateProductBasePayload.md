# UpdateProductBasePayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**price** | **number** |  | [optional] [default to undefined]
**vendorId** | **string** |  | [optional] [default to undefined]
**productId** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**discountedPrice** | **number** |  | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**isAvailable** | **boolean** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**weight** | **number** |  | [optional] [default to undefined]
**weightUnit** | **string** |  | [optional] [default to undefined]
**isAlcohol** | **boolean** |  | [optional] [default to undefined]
**isAgeRestricted** | **boolean** |  | [optional] [default to undefined]
**attributes** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**categoryIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**orderCount** | **number** | The number of times this product has been ordered. | [optional] [default to undefined]
**barcode** | **string** |  | [optional] [default to undefined]
**meta** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**tagIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateProductBasePayload } from './api';

const instance: UpdateProductBasePayload = {
    id,
    name,
    price,
    vendorId,
    productId,
    description,
    discountedPrice,
    images,
    isAvailable,
    createdAt,
    updatedAt,
    weight,
    weightUnit,
    isAlcohol,
    isAgeRestricted,
    attributes,
    categoryIds,
    orderCount,
    barcode,
    meta,
    tagIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
